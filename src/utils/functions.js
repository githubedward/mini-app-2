// simulate latency
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
export const chkLength = array => array.length;
