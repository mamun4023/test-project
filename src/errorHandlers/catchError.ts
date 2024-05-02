
class CatchError extends Error {
    private statusCode: number;
    private status: string;
    private isOperational: boolean
    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
      this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';
      this.isOperational = true
    }
  }
  
  module.exports =  CatchError ;