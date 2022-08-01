import { PortType } from "../src/types";
const port: PortType = 3001;

export function configServer(app: any) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
