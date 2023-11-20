import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagesTemplateService } from './messages-template/messages-template.service';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly messagesTemplateService: MessagesTemplateService
    ) {
    }

    @Get()
    getHello(): string {
        this.messagesTemplateService.context = {
            calculateSubject: '[Message test type] OPEN: Test bullmq mailhog',
            message: {
                prefix: 'OPEN',
                title: 'Test bullmq mailhog',
                body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum gravida lectus, sit amet varius diam varius nec. Proin varius, libero eget accumsan feugiat, eros nulla mollis lorem, sed aliquet nisl odio quis lacus.<br><br> Integer aliquam vitae ex et tincidunt. Nulla consectetur quam ac mauris volutpat, in ullamcorper lectus consectetur. Cras convallis erat massa, sit amet interdum sapien scelerisque a. Duis quis libero eget sem interdum facilisis.`
            },
            messageType: {
                name: "Message test type",
                color: '#D53335',
            },
            createdUser: {
                email: 'test@test.sk',
                firstName: 'Adam',
                lastName: 'Miko'
            }
        }
        return this.messagesTemplateService.getMessageOutput().html;
    }
}
