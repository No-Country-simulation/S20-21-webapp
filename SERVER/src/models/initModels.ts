import  sequelize  from "../config/db";
import { OTP } from "./OTP.model";
import { User } from "./user.model";


export const initModels = () => {

  User.initModel(sequelize);
  OTP.initModel(sequelize);


};

initModels();