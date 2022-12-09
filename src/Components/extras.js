import React from "react"

export default function extras() {
    return (

        <>
        <section className="package-table">
                    <div className="package">
                        <div className="package-title">
                            Package-1
                        </div>
                        <div className="package-description">
                            <p>Balance: $5000</p>
                            <p>Maximum Daily Loss: 5%</p>
                            <p>Profit Target for Next Milestone : $35</p>
                        </div>
                        <div className="package-price">
                            $20
                        </div>
                    </div>
                    <div className="package">
                        <div className="package-title">
                            Package-2
                        </div>
                        <div className="package-description">
                            <p>Balance: $900</p>
                            <p>Maximum Loss: 5%</p>
                            <p>Profit Target for Next Milestone : $90</p>
                        </div>
                        <div className="package-price">
                            $50
                        </div>
                    </div>
                    <div className="package">
                        <div className="package-title">
                            Package-3
                        </div>
                        <div className="package-description">
                            <p>Balance: $1850</p>
                            <p>Maximum Loss: 5%</p>
                            <p>Profit Target for Next Milestone : $185</p>
                        </div>
                        <div className="package-price">
                            $100
                        </div>
                    </div>
                    <div className="package">
                        <div className="package-title">
                            Package-4
                        </div>
                        <div className="package-description">
                            Balance: $4750
                            Maximum Loss: 5%
                            Profit Target for Next Milestone : $475
                        </div>
                        <div className="package-price">
                            $250
                        </div>
                    </div>
                </section >
        </>
        <section className="challenge-table">
            <div className="table-container">
                <div className="row1-container">
                    <div className="row-1">
                        <div className="area-1">
                            <h4>10.000$</h4>
                            <h4>25.000$</h4>
                            <h4>100.000$</h4>
                        </div>
                        <div className="area-2">
                            <h4>Normal</h4>
                            <h4>Aggressive</h4>
                        </div>
                    </div>
                </div>


                <div className="row-2">
                    <table>
                        <tbody>
                            <tr>
                                <div className="titlex">Trading Period</div>
                                <div className="content-area">
                                    <td>30 Days</td>
                                    <td>60 Days</td>
                                    <td>indefinite</td>
                                </div>
                            </tr>
                            <tr>
                                <div className="titlex">Minimum Trading Days</div>
                                <div className="content-area">
                                    <td>10 Days</td>
                                    <td>10 Days</td>
                                    <td>X</td>
                                </div>
                            </tr>
                            <tr>
                                <div className="titlex">Maximum Daily Loss</div>
                                <div className="content-area">
                                    <td>$500</td>
                                    <td>$500</td>
                                    <td>$500</td>
                                </div>
                            </tr>
                            <tr>
                                <div className="titlex">Maximum Loss</div>
                                <div className="content-area">
                                    <td>$1000</td>
                                    <td>$1000</td>
                                    <td>$1000</td>
                                </div>
                            </tr>
                            <tr>
                                <div className="titlex">Profit Target</div>
                                <div className="content-area">
                                    <td>$1000</td>
                                    <td>$1000</td>
                                    <td>X</td>
                                </div>
                            </tr>
                            <tr>
                                <div className="titlex">Refundable Fee</div>
                                <div className="content-area">
                                    <td>$100</td>
                                    <td>Free</td>
                                    <td>refund</td>
                                </div>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section >

<section className="challenge-steps">
<div className="title">Choose Your Side</div>
{challengeNumber === 0 ?
    <>
        <div className="column-container" >
            <div className="columns" onClick={() => setChallengeNumber(0)}>
                <div className="row--1">
                    <img src={icon_discover} alt="discover icon"></img>
                    <h4>Beginner</h4>
                </div>
                <div className="row--2">
                    <div className="description">
                        <p>Trader candidate trying to trade in money markets. Get training, complete quizzes and prepare to manage a professional fund.
                        </p>
                    </div>
                </div>
            </div>

            <div className="columns" onClick={() => setChallengeNumber(1)}>
                <div className="row--1">
                    <img src={icon_approve} alt="approve icon"></img>
                    <h4>Challenger</h4>
                </div>
                <div className="row--2">
                    <div className="description">
                        <p>A trader who actively trades in cryptocurrency markets but lacks liquidity. Pass the challenges, prove yourself and be ready to manage a big fund.
                        </p>

                    </div>
                </div>
            </div>

            <div className="columns" onClick={() => setChallengeNumber(2)}>
                <div className="row--1">
                    <img src={icon_jacfolder} alt="jacfolder icon"></img>
                    <h4>Pro</h4>
                </div>
                <div className="row--2">
                    <div className="description">
                        <p>Professional enough to pass the demo stages, challenges directly and take risks without fear. Take a risk and double your balance directly by skipping the Challenge stages.
                        </p>
                    </div>
                </div>
            </div>
        </div>
       
    </>
    :
    <>
        <div className="column-container">
            <div className="columns">
                <div className="row--1">
                    <img src={icon_discover} alt="discover icon"></img>
                    <h4>Direct Earn</h4>
                </div>
                <div className="row--2">
                    <div className="description">
                        <p>No Demo Challenge!</p>

                        <p>No Time Restriction</p>

                        <p>In direct earn mode, you can start to manage the real fund you purchased directly, and you can withdraw the amount you earn directly.</p>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="row--1">
                    <img src={icon_approve} alt="approve icon"></img>
                    <h4>Duplicate Your Funds</h4>
                </div>
                <div className="row--2">
                    <div className="description">
                        <p>
                            Every 10% profit you make in risky mode moves you to the next milestone. For each mileton, the amount of funds you manage doubles by 2 and 1.5 times, respectively. Click to view Milestonels.
                        </p>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="row--1">
                    <img src={icon_jacfolder} alt="jacfolder icon"></img>
                    <h4>Share 50% of your Profit</h4>
                </div>
                <div className="row--2">
                    <div className="description">
                        <p>Withdraw 50% of your profit in risky mode. For every 10%, your fund should be doubled or multiplied by 1.5.</p>

                        <p>Good luck!</p>
                    </div>
                </div>
            </div>
        </div>
        <section className="package-table">
            <div className="package">
                <div className="package-title">
                    Package-1
                </div>
                <div className="package-description">
                    <p>Balance: $350</p>
                    <p>Maximum Loss: 5%</p>
                    <p>Profit Target for Next Milestone : $35</p>
                </div>
                <div className="package-price">
                    $20
                </div>
            </div>
            <div className="package">
                <div className="package-title">
                    Package-2
                </div>
                <div className="package-description">
                    <p>Balance: $900</p>
                    <p>Maximum Loss: 5%</p>
                    <p>Profit Target for Next Milestone : $90</p>
                </div>
                <div className="package-price">
                    $50
                </div>
            </div>
            <div className="package">
                <div className="package-title">
                    Package-3
                </div>
                <div className="package-description">
                    <p>Balance: $1850</p>
                    <p>Maximum Loss: 5%</p>
                    <p>Profit Target for Next Milestone : $185</p>
                </div>
                <div className="package-price">
                    $100
                </div>
            </div>
            <div className="package">
                <div className="package-title">
                    Package-4
                </div>
                <div className="package-description">
                    Balance: $4750
                    Maximum Loss: 5%
                    Profit Target for Next Milestone : $475
                </div>
                <div className="package-price">
                    $250
                </div>
            </div>
        </section >
    </>

<section className="challenge-steps">
<div className="title">Choose Your Side</div>
{challengeNumber === 0 ?
    <>
        <div className="column-container" >
            <Link to="beginner">
            <div className="columns" onClick={() => setChallengeNumber(0)}>
                

                    <div className="row--1">
                        <img src={icon_discover} alt="discover icon"></img>
                        <h4>Beginner</h4>
                    </div>
                

                <div className="row--2">
                    <div className="description">
                        <p>Trader candidate trying to trade in money markets. Get training, complete quizzes and prepare to manage a professional fund.
                        </p>
                    </div>
                </div>
            </div>
            </Link>

            <Link to="challenger">
            <div className="columns" onClick={() => setChallengeNumber(1)}>
                <div className="row--1">
                    <img src={icon_approve} alt="approve icon"></img>
                    <h4>Challenger</h4>
                </div>
                <div className="row--2">
                    <div className="description">
                        <p>A trader who actively trades in cryptocurrency markets but lacks liquidity. Pass the challenges, prove yourself and be ready to manage a big fund.
                        </p>

                    </div>
                </div>
            </div>
            </Link>

            <Link to="pro">
            <div className="columns" onClick={() => setChallengeNumber(2)}>
                <div className="row--1">
                    <img src={icon_jacfolder} alt="jacfolder icon"></img>
                    <h4>Pro</h4>
                </div>
                <div className="row--2">
                    <div className="description">
                        <p>Professional enough to pass the demo stages, challenges directly and take risks without fear. Take a risk and double your balance directly by skipping the Challenge stages.
                        </p>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        

    </>
    :
    <>
        <div className="column-container">
            <div className="columns">
                <div className="row--1">
                    <img src={icon_discover} alt="discover icon"></img>
                    <h4>Direct Earn</h4>
                </div>
                <div className="row--2">
                    <div className="description">
                        <p>No Demo Challenge!</p>

                        <p>No Time Restriction</p>

                        <p>In direct earn mode, you can start to manage the real fund you purchased directly, and you can withdraw the amount you earn directly.</p>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="row--1">
                    <img src={icon_approve} alt="approve icon"></img>
                    <h4>Duplicate Your Funds</h4>
                </div>
                <div className="row--2">
                    <div className="description">
                        <p>
                            Every 10% profit you make in risky mode moves you to the next milestone. For each mileton, the amount of funds you manage doubles by 2 and 1.5 times, respectively. Click to view Milestonels.
                        </p>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="row--1">
                    <img src={icon_jacfolder} alt="jacfolder icon"></img>
                    <h4>Share 50% of your Profit</h4>
                </div>
                <div className="row--2">
                    <div className="description">
                        <p>Withdraw 50% of your profit in risky mode. For every 10%, your fund should be doubled or multiplied by 1.5.</p>

                        <p>Good luck!</p>
                    </div>
                </div>
            </div>
        </div>
        <section className="package-table">
            <div className="package">
                <div className="package-title">
                    Package-1
                </div>
                <div className="package-description">
                    <p>Balance: $350</p>
                    <p>Maximum Loss: 5%</p>
                    <p>Profit Target for Next Milestone : $35</p>
                </div>
                <div className="package-price">
                    $20
                </div>
            </div>
            <div className="package">
                <div className="package-title">
                    Package-2
                </div>
                <div className="package-description">
                    <p>Balance: $900</p>
                    <p>Maximum Loss: 5%</p>
                    <p>Profit Target for Next Milestone : $90</p>
                </div>
                <div className="package-price">
                    $50
                </div>
            </div>
            <div className="package">
                <div className="package-title">
                    Package-3
                </div>
                <div className="package-description">
                    <p>Balance: $1850</p>
                    <p>Maximum Loss: 5%</p>
                    <p>Profit Target for Next Milestone : $185</p>
                </div>
                <div className="package-price">
                    $100
                </div>
            </div>
            <div className="package">
                <div className="package-title">
                    Package-4
                </div>
                <div className="package-description">
                    Balance: $4750
                    Maximum Loss: 5%
                    Profit Target for Next Milestone : $475
                </div>
                <div className="package-price">
                    $250
                </div>
            </div>
        </section >
    </>


}

</section >

<Drawer anchor='right' open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}  classes={{ paper: classes.paper }}>


<div size='large' edge='start' color='white' aria-label='logo' onClick={() => setIsSidebarOpen(true)}>
</div>
<Box p={2} width='550px' textAlign='center' role='presentation'>
    <Typography varian='h6' component='div'>
        <div className="about-us-title">About Us</div>

        <div className="about-us-container">
            <div className="row">
                <div className="title">
                    Who Are We?
                </div>
                <div className="description">
                    Lorem Ipsum Dolor Sit Amet
                </div>
            </div>
            <div className="row">
                <div className="title">
                    Working
                </div>
                <div className="description">
                    Lorem Ipsum Dolor Sit Amet
                </div>
            </div>
            <div className="row">
                <div className="title">
                    Advantages
                </div>
                <div className="description">
                    Lorem Ipsum Dolor Sit Amet
                </div>
            </div>
        </div>
    </Typography>
</Box>
</Drawer>


}
    )
}