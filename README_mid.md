# 202130432 최지민
Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:71:19)
    at Object.createHash (node:crypto:133:10)
    at module.exports (C:\React1\23-react1\node_modules\webpack\lib\util\createHash.js:90:53)
    at NormalModule._initBuildHash (C:\React1\23-react1\node_modules\webpack\lib\NormalModule.js:386:16)
    at C:\React1\23-react1\node_modules\webpack\lib\NormalModule.js:418:10
    at C:\React1\23-react1\node_modules\webpack\lib\NormalModule.js:293:13
    at C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:367:11
    at C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:233:18
    at context.callback (C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:111:13)
    at C:\React1\23-react1\node_modules\babel-loader\lib\index.js:51:103 {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

Node.js v18.15.0

C:\React1\23-react1>npm restart

> 23-react1@0.1.0 restart
> npm stop --if-present && npm start


> 23-react1@0.1.0 start
> react-scripts start

(node:5920) [DEP0111] DeprecationWarning: Access to process.binding('http_parser') is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
Starting the development server...

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:71:19)
    at Object.createHash (node:crypto:133:10)
    at module.exports (C:\React1\23-react1\node_modules\webpack\lib\util\createHash.js:90:53)
    at NormalModule._initBuildHash (C:\React1\23-react1\node_modules\webpack\lib\NormalModule.js:386:16)
    at handleParseError (C:\React1\23-react1\node_modules\webpack\lib\NormalModule.js:434:10)
    at C:\React1\23-react1\node_modules\webpack\lib\NormalModule.js:466:5
    at C:\React1\23-react1\node_modules\webpack\lib\NormalModule.js:327:12
    at C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:373:3
    at iterateNormalLoaders (C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:214:10)
    at iterateNormalLoaders (C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:221:10)
    at C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:236:3
    at runSyncOrAsync (C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:130:11)
    at iterateNormalLoaders (C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:232:2)
    at Array.<anonymous> (C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:205:4)
    at Storage.finished (C:\React1\23-react1\node_modules\enhanced-resolve\lib\CachedInputFileSystem.js:55:16)
    at C:\React1\23-react1\node_modules\enhanced-resolve\lib\CachedInputFileSystem.js:91:9
C:\React1\23-react1\node_modules\react-scripts\scripts\start.js:19
  throw err;
  ^

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:71:19)
    at Object.createHash (node:crypto:133:10)
    at module.exports (C:\React1\23-react1\node_modules\webpack\lib\util\createHash.js:90:53)
    at NormalModule._initBuildHash (C:\React1\23-react1\node_modules\webpack\lib\NormalModule.js:386:16)
    at C:\React1\23-react1\node_modules\webpack\lib\NormalModule.js:418:10
    at C:\React1\23-react1\node_modules\webpack\lib\NormalModule.js:293:13
    at C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:367:11
    at C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:233:18
    at context.callback (C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:111:13)
    at C:\React1\23-react1\node_modules\babel-loader\lib\index.js:51:103 {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

Node.js v18.15.0

C:\React1\23-react1>npm -v
9.5.0

C:\React1\23-react1>cd src

C:\React1\23-react1\src>npm start

> 23-react1@0.1.0 start
> react-scripts start

(node:11608) [DEP0111] DeprecationWarning: Access to process.binding('http_parser') is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
Starting the development server...

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:71:19)
    at Object.createHash (node:crypto:133:10)
    at module.exports (C:\React1\23-react1\node_modules\webpack\lib\util\createHash.js:90:53)
    at NormalModule._initBuildHash (C:\React1\23-react1\node_modules\webpack\lib\NormalModule.js:386:16)
    at handleParseError (C:\React1\23-react1\node_modules\webpack\lib\NormalModule.js:434:10)
    at C:\React1\23-react1\node_modules\webpack\lib\NormalModule.js:466:5
    at C:\React1\23-react1\node_modules\webpack\lib\NormalModule.js:327:12
    at C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:373:3
    at iterateNormalLoaders (C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:214:10)
    at iterateNormalLoaders (C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:221:10)
    at C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:236:3
    at runSyncOrAsync (C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:130:11)
    at iterateNormalLoaders (C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:232:2)
    at Array.<anonymous> (C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:205:4)
    at Storage.finished (C:\React1\23-react1\node_modules\enhanced-resolve\lib\CachedInputFileSystem.js:55:16)
    at C:\React1\23-react1\node_modules\enhanced-resolve\lib\CachedInputFileSystem.js:91:9
C:\React1\23-react1\node_modules\react-scripts\scripts\start.js:19
  throw err;
  ^

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:71:19)
    at Object.createHash (node:crypto:133:10)
    at module.exports (C:\React1\23-react1\node_modules\webpack\lib\util\createHash.js:90:53)
    at NormalModule._initBuildHash (C:\React1\23-react1\node_modules\webpack\lib\NormalModule.js:386:16)
    at C:\React1\23-react1\node_modules\webpack\lib\NormalModule.js:418:10
    at C:\React1\23-react1\node_modules\webpack\lib\NormalModule.js:293:13
    at C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:367:11
    at C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:233:18
    at context.callback (C:\React1\23-react1\node_modules\loader-runner\lib\LoaderRunner.js:111:13)
    at C:\React1\23-react1\node_modules\babel-loader\lib\index.js:51:103 {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

Node.js v18.15.0
