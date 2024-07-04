const quotes = [
    { content: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { content: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { content: "Get busy living or get busy dying.", author: "Stephen King" },
    { content: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { content: "In the end, it’s not the years in your life that count. It’s the life in your years.", author: "Abraham Lincoln" },
    { content: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { content: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { content: "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.", author: "Henry Ford" },
    { content: "Good friends, good books, and a sleepy conscience: this is the ideal life.", author: "Mark Twain" },
    { content: "Life isn’t about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    { content: "The biggest adventure you can take is to live the life of your dreams.", author: "Oprah Winfrey" },
    { content: "Life is a succession of lessons which must be lived to be understood.", author: "Helen Keller" },
    { content: "Life is ten percent what happens to you and ninety percent how you respond to it.", author: "Charles Swindoll" },
    { content: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },
    { content: "Life is made of ever so many partings welded together.", author: "Charles Dickens" },
    { content: "Life’s tragedy is that we get old too soon and wise too late.", author: "Benjamin Franklin" },
    { content: "The best way to predict your future is to create it.", author: "Peter Drucker" },
    { content: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { content: "Live in the sunshine, swim the sea, drink the wild air.", author: "Ralph Waldo Emerson" },
    { content: "Keep smiling, because life is a beautiful thing and there’s so much to smile about.", author: "Marilyn Monroe" },
    { content: "Life is a flower of which love is the honey.", author: "Victor Hugo" },
    { content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { content: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
    { content: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain" },
    { content: "Life is a journey that must be traveled no matter how bad the roads and accommodations.", author: "Oliver Goldsmith" },
    { content: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { content: "Live each day as if your life had just begun.", author: "Johann Wolfgang von Goethe" },
    { content: "Life is too important to be taken seriously.", author: "Oscar Wilde" },
    { content: "It is our choices that show what we truly are, far more than our abilities.", author: "J.K. Rowling" },
    { content: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
    { content: "Life is not a problem to be solved, but a reality to be experienced.", author: "Soren Kierkegaard" },
    { content: "Life is short, and it is up to you to make it sweet.", author: "Sarah Louise Delany" },
    { content: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { content: "We should remember that just as a positive outlook on life can promote good health, so can everyday acts of kindness.", author: "Hillary Clinton" },
    { content: "The longer I live, the more I realize the impact of attitude on life.", author: "Charles Swindoll" },
    { content: "Life is like a coin. You can spend it any way you wish, but you only spend it once.", author: "Lillian Dickson" },
    { content: "The quality of life is determined by its activities.", author: "Aristotle" },
    { content: "Your life does not get better by chance, it gets better by change.", author: "Jim Rohn" },
    { content: "Difficulties in life are intended to make us better, not bitter.", author: "Dan Reeves" },
    { content: "Life is a long lesson in humility.", author: "James M. Barrie" },
    { content: "Life is what we make it, always has been, always will be.", author: "Grandma Moses" },
    { content: "The greatest pleasure in life is doing what people say you cannot do.", author: "Walter Bagehot" },
    { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { content: "Life can only be understood backwards; but it must be lived forwards.", author: "Soren Kierkegaard" },
    { content: "Life is a daring adventure or nothing at all.", author: "Helen Keller" },
    { content: "If life were predictable, it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { content: "Life shrinks or expands in proportion to one’s courage.", author: "Anaïs Nin" },
    { content: "Life is a play. It’s not its length, but its performance that counts.", author: "Seneca" },
    { content: "The good life is one inspired by love and guided by knowledge.", author: "Bertrand Russell" },
    { content: "The only real mistake is the one from which we learn nothing.", author: "Henry Ford" }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteElement.innerHTML = quote.content;
    authorElement.innerHTML = quote.author;
}

getQuote();  // Load a quote when the page loads

function tweet() {
    const quote = quoteElement.innerHTML;
    const author = authorElement.innerHTML;
    const url = 'https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + " " + author)}';
    window.open(url, "Tweet Window", "width=600,height=300");
}