import { Injectable } from '@nestjs/common';
import mjml2html from 'mjml';
import { compile } from 'handlebars';
import { Message, MessageType, User } from '@prisma/client';

export type EmailContextType = {
    calculateSubject: string;
    message?: Partial<Message>;
    messageType?: Partial<MessageType>;
    createdUser?: Partial<User>;
}

@Injectable()
export class MessagesTemplateService {
    private _context: EmailContextType = {
        calculateSubject: '',
    };

    get context(): EmailContextType {
        return this._context;
    }

    set context(value: EmailContextType) {
        this._context = value;
    }

    public getMessageOutput() {
        const template = compile(this.createMessageBody());
        return mjml2html(template(this.context), {
            validationLevel: "soft",
        });
    }


    /**
     * Cerate message body
     * @private
     */
    private createMessageBody(): string {
        return `
            <mjml>
                <mj-head>
                    <mj-title>{{subject}}</mj-title>
                    <mj-font name="Inter" href="https://fonts.googleapis.com/css?family=Inter:wght@100;200;300;400;500;600;700;800;900" />
                    <mj-attributes>
                        <mj-text font-size="14px"/>
                        <mj-all font-family="Inter, Arial"/>
                    </mj-attributes>
                    <mj-style inline="inline">
                        .message-type {
                            {{#if messageType.color}}
                            background-color: {{{messageType.color}}};
                            {{else}}
                            background-color: #efefef;
                            {{/if}}
                        }
                        .user-avatar img {
                            border-radius: 50px;
                        }
                    </mj-style>
                </mj-head>
                <mj-body>
                    <!-- Header -->
                    <mj-section css-class="message-type" padding="3px 0">
                        <mj-column>
                            <mj-text font-size="14px" align="center" color="#ffffff">
                                {{messageType.name}}
                            </mj-text>
                        </mj-column>
                    </mj-section>
                    <mj-section background-color="#f0f0f0">
                        <mj-column>
                            <mj-text font-size="16px">
                                {{message.prefix}}: {{message.title}}
                            </mj-text>
                        </mj-column>
                    </mj-section>
                    
                    <!-- Body -->
                    <mj-section border="1px solid #f0f0f0">
                        <mj-column>
                            <mj-text line-height="1.5">{{{message.body}}}</mj-text>  
                        </mj-column>
                    </mj-section>
                    
                    <!-- Send user -->
                    <mj-section background-color="#f8f8f8" border="1px solid #f0f0f0" border-top="0" text-align="left" padding-top="3px" padding-bottom="3px">
                        <mj-column vertical-align="middle" width="100px">
                            <mj-image css-class="user-avatar" width="50px" height="50px" src="https://www.online-image-editor.com//styles/2014/images/example_image.png" />
                        </mj-column>
                        <mj-column vertical-align="middle">
                            <mj-text padding="0px" line-height="1.5">{{createdUser.firstName}} {{createdUser.lastName}}</mj-text>
                            <mj-text font-size="12px" padding="0px" line-height="1.5">{{createdUser.email}}</mj-text>  
                        </mj-column>
                    </mj-section>
                    
                    <!-- Footer -->
                    <mj-section padding="10px 0">
                        <mj-column>
                            <mj-text align="center" font-size="12px">Email from Message system</mj-text> 
                        </mj-column>
                    </mj-section>
                </mj-body>
            </mjml>
       `;
    }
}
