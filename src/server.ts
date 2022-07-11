import express from 'express';

class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: any[], port: number) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private initializeMiddlewares() {
        this.app.use(this.loggerMiddleware);
        this.app.use(express.json());
    }

    private initializeControllers(controllers: any[]) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
        this.app.use('/health', (req, resp) => {
            resp.send({ok: true})
        });
    }

    public loggerMiddleware(request: express.Request, response: express.Response, next: any) {
        console.log(`headers: ${JSON.stringify(request.headers)}`);
        console.log(`${request.method} ${request.path}`);
        next();
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }

    public close() {
        // cleanup tasks
        console.log(`App close`)
    }
}

export default App;