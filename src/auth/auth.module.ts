import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "src/user/user.module";

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: "OWEI-492JGF03-34%$#&&PAQF2#%SH%^HJE^UJW$",
      signOptions: { expiresIn: "60s" },
    }),
  ],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
