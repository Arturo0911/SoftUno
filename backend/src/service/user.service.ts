import { User } from "../entity/User.entity";
import { encryptPassword } from "../helper/security";
import { decryptPassword } from "../helper/security";

export const saveUser = async(userBody: any):Promise<User>=>{
    const newUser:User = new User();

    let passwordEncrypted = await encryptPassword(userBody.password);
    
    newUser.credential = userBody.credential;
    newUser.firstName = userBody.firstName;
    newUser.lastName = userBody.lastName;
    newUser.email = userBody.email;
    newUser.password = passwordEncrypted;
    newUser.roleId = userBody.roleId;
    newUser.departmentId = userBody.departmentId;
    const userSaved = User.save(newUser);
    return userSaved;
}


export const performLogin = (loginBody: any):boolean =>{
    return true;
}
