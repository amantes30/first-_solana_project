import { Program } from '@coral-xyz/anchor';
import { IDL as HelloWorldIDL } from '../target/types/hello_world';
import type { HelloWorld } from '../target/types/hello_world';
export { HelloWorld, HelloWorldIDL };
export type HelloWorldProgram = Program<HelloWorld>;
