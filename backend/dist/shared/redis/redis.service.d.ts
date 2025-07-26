import { OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';
export declare class RedisService implements OnModuleDestroy {
    private readonly client;
    constructor(client: Redis);
    validateKey(key: string): Promise<boolean>;
    getKey(key: string): Promise<string | null>;
    setKey(key: string, value: string, ttlSeconds?: number): Promise<void>;
    invalidateKey(key: string): Promise<void>;
    onModuleDestroy(): Promise<void>;
    getKeysMatching(pattern: string): Promise<string[]>;
}
