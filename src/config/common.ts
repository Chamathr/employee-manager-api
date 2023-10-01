require('dotenv').config()

class CommonConfig {
    public static dummyImage: any = process.env.DUMMY_IMAGE
}

export { CommonConfig }