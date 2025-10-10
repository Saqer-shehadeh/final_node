import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const Upload_DIR = path.resolve(__dirname, "uploads");

export default Upload_DIR;