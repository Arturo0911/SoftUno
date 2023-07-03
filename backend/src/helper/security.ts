import bcrypt from 'bcryptjs';


export const encryptPassword = async(password:string)=>{
    return await bcrypt.hash(password, 12);
}

export const decryptPassword = async(password:string, possiblePass:string)=>{
    try{
        return await bcrypt.compare(password, possiblePass);
    }catch(err){
        if(err instanceof Error){
            console.log(`Error by ${err}`);
            return false;
        }
    }
}
