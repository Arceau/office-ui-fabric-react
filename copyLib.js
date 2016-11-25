var fs = require('fs-extra')

fs.copySync("./packages/office-ui-fabric-react/lib", "./lib");

fs.copySync("./packages/office-ui-fabric-react/dist", "./dist");