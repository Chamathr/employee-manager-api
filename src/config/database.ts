import dotenv from 'dotenv';
dotenv.config();

class DatabaseConfig {
    public static databaseUrl: string = process.env.DATABASE_URL!
}

export { DatabaseConfig }