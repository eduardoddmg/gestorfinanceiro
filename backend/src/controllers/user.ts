interface DataInterface {
    username: string;
    email: string;
    cpf: number;
    password?: string;
}

export async function addUser (model: any, data: DataInterface) {
    try {
        const request = new model(data);
        await request.save();
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};