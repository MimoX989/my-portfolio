import { Card, CardBody } from '@nextui-org/react'
import React from 'react'
import TradingViewWatchlist from '../components/tradingview-watchlist'

function Watchlist() {
  return (
    <Card className="h-full">
      <CardBody>
        <TradingViewWatchlist />
      </CardBody>
    </Card>
  )
}

export default Watchlist