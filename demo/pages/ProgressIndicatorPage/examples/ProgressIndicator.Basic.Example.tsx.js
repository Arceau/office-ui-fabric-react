module.exports = "import * as React from 'react';\r\nimport {\r\n  ProgressIndicator\r\n} from '../../../../index';\r\nimport { Async } from '../../../../utilities/Async/Async';\r\n\r\nexport interface IProgressIndicatorBasicExampleState {\r\n    percentComplete: number;\r\n}\r\n\r\nconst INTERVAL_DELAY: number = 100;\r\nconst INTERVAL_INCREMENT: number = .01;\r\nconst RESTART_WAIT_TIME: number = 2000;\r\n\r\nexport class ProgressIndicatorBasicExample extends React.Component<any, IProgressIndicatorBasicExampleState> {\r\n\r\n  private _interval: number;\r\n  private _async: Async;\r\n\r\n  constructor() {\r\n    super();\r\n\r\n    this._async = new Async(this);\r\n\r\n    this.state = {\r\n        percentComplete: 0\r\n    };\r\n    this._startProgressDemo = this._startProgressDemo.bind(this);\r\n  }\r\n\r\n  public componentDidMount() {\r\n    this._startProgressDemo();\r\n  }\r\n\r\n  public componentWillUnmount() {\r\n    this._async.dispose();\r\n  }\r\n\r\n  public render() {\r\n    let { percentComplete } = this.state;\r\n\r\n    return (\r\n      <ProgressIndicator\r\n        label='Example title'\r\n        description='Example description'\r\n        percentComplete={ percentComplete } />\r\n    );\r\n  }\r\n\r\n  private _startProgressDemo() {\r\n    // reset the demo\r\n    this.setState({\r\n        percentComplete: 0\r\n    });\r\n\r\n    // update progress\r\n    this._interval = this._async.setInterval(() => {\r\n      let percentComplete = this.state.percentComplete + INTERVAL_INCREMENT;\r\n\r\n      // once complete, set the demo to start again\r\n      if (percentComplete >= 1.0) {\r\n        percentComplete = 1.0;\r\n        this._async.clearInterval(this._interval);\r\n        this._async.setTimeout(this._startProgressDemo, RESTART_WAIT_TIME);\r\n      }\r\n      this.setState({\r\n          percentComplete: percentComplete\r\n      });\r\n    }, INTERVAL_DELAY);\r\n  }\r\n}\r\n";