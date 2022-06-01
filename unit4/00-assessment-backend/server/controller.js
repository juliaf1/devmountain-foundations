const getCompliment = (req, res) => {
    const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
    res.status(200).send(compliments.sample());
};

const getFortune = (req, res) => {
    const fortunes = ['Bide your time, for success is near.', 'Change is happening in your life, so go with the flow!', 'Dedicate yourself with a calm mind to the task at hand.', 'Don’t be discouraged, because every wrong attempt discarded is another step forward.', 'Education is the ability to meet life’s situations.', 'It’s time to get moving. Your spirits will lift accordingly.'];
    res.status(200).send(fortunes.sample());
};

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
};

module.exports = {
    getCompliment,
    getFortune,
}