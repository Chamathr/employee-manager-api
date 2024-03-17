import dotenv from 'dotenv';
dotenv.config();

class CommonConfig {
    public static dummyImage: string | undefined = process.env.DUMMY_IMAGE
}

export { CommonConfig }