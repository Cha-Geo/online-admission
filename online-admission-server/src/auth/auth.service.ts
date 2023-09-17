import { Injectable } from "@nestjs/common";
import { sign } from "jsonwebtoken";
import { Payload } from "src/shared/interfaces/jwt.payload";
import { Session } from "src/shared/interfaces/session";
import { Applicant } from "src/shared/interfaces/applicant";
import { ApplicantsService } from "src/applicants/applicants.service";

@Injectable()
export class AuthService {
  constructor(private applicantService: ApplicantsService) {}
  async signPayload(payload: Payload) {
    return sign(payload, process.env.SECRET_KEY, { expiresIn: "1d" });
  }

  async validateUser(payload: Payload) {
    return await this.applicantService.findByPayload(payload);
  }

  async login(user: Applicant, session: Session): Promise<any> {
    const payload = {
      email: user.email,
    };
    console.log("email: ", payload.email);
    const authToken = await this.signPayload(payload);
    console.warn("auth", authToken);

    session.user = user; // Store user information in the session
    session.authToken = authToken; // Store the JWT in the session

    return {
      authToken: authToken,
      user: user,
    };
  }
}
