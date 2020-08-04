/* tslint:disable */
/* eslint-disable */
/**
* Starts the client.
* @param {string} chain_spec
* @param {string} log_level
* @returns {any}
*/
export function start_client(chain_spec: string, log_level: string): any;
/**
* A running client.
*/
export class Client {
  free(): void;
/**
* Allows starting an RPC request. Returns a `Promise` containing the result of that request.
* @param {string} rpc
* @returns {Promise<any>}
*/
  rpcSend(rpc: string): Promise<any>;
/**
* Subscribes to an RPC pubsub endpoint.
* @param {string} rpc
* @param {Function} callback
*/
  rpcSubscribe(rpc: string, callback: Function): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly start_client: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_client_free: (a: number) => void;
  readonly client_rpcSend: (a: number, b: number, c: number) => number;
  readonly client_rpcSubscribe: (a: number, b: number, c: number, d: number) => void;
  readonly hash_test: (a: number, b: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1ecd5e9aee60cf83: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5e4f8b3c055f3911: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2a2f71c8e68aa468: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hf7f45fed5fc1a371: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he98ff090b1fdfb12: (a: number, b: number, c: number) => void;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h660299b679d6ef79: (a: number, b: number, c: number, d: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
        