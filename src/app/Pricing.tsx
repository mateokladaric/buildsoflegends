export default function Pricing () {
    return (
        <div id="pricing" className="my-60">
            <h1 className="text-5xl w-full text-center font-bold">Pricing Plans</h1>
            <h4 className="text-xl text-slate-300 w-full text-center mt-4">Start having fun in league thanks to our non-renewing monthly subscription.</h4>
            <div className="container mx-auto grid grid-cols-3 mt-12 gap-5 max-w-3xl">
                <div className="w-full h-full grid grid-rows-3 border rounded-2xl border-white border-opacity-30 shadow-2xl backdrop-blur-md">
                    <h2 className="w-full text-center text-4xl mt-8 font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent border-b border-white border-opacity-30">1 Month</h2>
                    <h3 className="w-full text-center text-3xl mt-8 italic font-bold">€4.99</h3>
                    <a href="https://buy.stripe.com/aEU8Aa6HYddLcHSaEE" className="w-2/3 text-center mx-auto px-4 py-3 mt-2 border font-bold rounded-full mb-9">Buy</a>
                </div>
                <div className="w-full h-full grid grid-rows-3 border rounded-2xl border-white border-opacity-30 shadow-2xl backdrop-blur-md">
                    <h2 className="w-full text-center text-4xl mt-8 font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent border-b border-white border-opacity-30">3 Months</h2>
                    <h3 className="w-full text-center text-3xl mt-8 italic font-bold">€12.99</h3>
                    <a href="https://buy.stripe.com/4gw7w65DU5LjfU4289" className="w-2/3 text-center mx-auto px-4 py-3 mt-2 border font-bold rounded-full mb-9">Buy</a>
                </div>
                <div className="w-full h-full grid grid-rows-3 border rounded-2xl border-white border-opacity-30 shadow-2xl backdrop-blur-md">
                    <h2 className="w-full text-center text-4xl mt-8 font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent border-b border-white border-opacity-30">1 Year</h2>
                    <h3 className="w-full text-center text-3xl mt-8 italic font-bold">€44.99</h3>
                    <a href="https://buy.stripe.com/6oE9Ee5DU4HfazK6oq" className="w-2/3 text-center mx-auto px-4 py-3 mt-2 border font-bold rounded-full mb-9">Buy</a>
                </div>
            </div>
        </div>
    );
}