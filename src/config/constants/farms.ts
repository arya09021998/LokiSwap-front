import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'LOKI',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x3c8e98Efd5dBbf7F0200Aa9C9C5F39294ca18e53',
    },
    token: tokens.loki,
    quoteToken: tokens.usdt,
  },
  {
    pid: 1,
    lpSymbol: 'LOKI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3c8e98Efd5dBbf7F0200Aa9C9C5F39294ca18e53',
    },
    token: tokens.loki,
    quoteToken: tokens.busd,
  },
  {
    pid: 2,
    lpSymbol: 'LOKI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4054cD657986251693e18261b2a2b99914e2b257',
    },
    token: tokens.loki,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default farms
