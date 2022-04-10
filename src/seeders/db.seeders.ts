import { SP_ADMIN_EMAIL, SP_ADMIN_NAME, SP_ADMIN_PASSWORD } from "../config/app.config";
import { orgModel, userModel } from "../dataSource";

(async () => {
  try {
    let org = await orgModel.create({
      data: {
        name: "deerhold",
        credit: 5000,
      },
    });
    await userModel.create({
      data: {
        name: SP_ADMIN_NAME,
        email: SP_ADMIN_EMAIL,
        password: SP_ADMIN_PASSWORD,
        role: "SP_ADMIN",
        org_id: org.id,
      },
    });
    console.log("super_admin created");
  } catch (err) {
    console.log(err);
  }
})();
