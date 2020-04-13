import {
  Injectable,
  UnauthorizedException,
  CanActivate,
  ExecutionContext,
} from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

@Injectable()
export class TestGuard extends PassportStrategy(Strategy) {
  constructor() {
    super();
  }

  validate(): boolean {
    console.log("this bitch aint shit");

    return true;
  }
}
