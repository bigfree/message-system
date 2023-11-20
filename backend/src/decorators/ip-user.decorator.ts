import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const IpUser = createParamDecorator(
    (data: unknown, context: ExecutionContext) => {
        const ctx: GqlExecutionContext = GqlExecutionContext.create(context);
        return ctx.getContext().req.ip;
    },
);