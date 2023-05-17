import * as argon2 from 'argon2';
import * as crypto from 'crypto';

const hashingConfig = {
    parallelism: 1,
    memoryCost: 64000, // 64 mb
    timeCost: 3, // number of iterations
};

export async function hashPassword(password: string) {
    let salt = crypto.randomBytes(16);
    return await argon2.hash(password, {
        ...hashingConfig,
        salt,
    });
}

export async function verifyPasswordWithHash(password: string, hash: string) {
    return await argon2.verify(hash, password, hashingConfig);
}
