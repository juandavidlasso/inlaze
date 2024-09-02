import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
    // Override
    override getRequest(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest();
        return req;
    }
}
