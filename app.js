const dummyText = [
    'I love halvah tootsie roll donut shortbread lemon drops chocolate bar chupa chups. Candy canes biscuit danish pie bear claw gummies halvah jujubes I love. Caramels liquorice gummies liquorice biscuit apple pie chocolate cake cookie. Marzipan powder cake cake croissant caramels dragée tootsie roll. Marzipan cookie wafer icing cookie. Bonbon caramels shortbread apple pie sesame snaps. Jujubes I love cotton candy oat cake cookie carrot cake dragée gummi bears. Topping sugar plum marzipan gingerbread chocolate marshmallow cheesecake powder donut. Candy candy canes caramels pudding croissant. I love dessert caramels sesame snaps I love macaroon.',
    'Caramels gummi bears sesame snaps toffee croissant topping fruitcake dessert. I love caramels cheesecake dragée I love cupcake. Halvah chocolate cake marshmallow cake pudding I love tootsie roll jelly I love. Brownie I love danish liquorice shortbread chocolate cake gummies gummi bears. I love jelly-o sesame snaps pie macaroon danish croissant dragée. Shortbread biscuit jelly beans sugar plum jelly-o oat cake fruitcake muffin muffin. I love jujubes muffin macaroon tart carrot cake. Danish cotton candy chocolate bar brownie oat cake topping. Candy carrot cake I love candy croissant fruitcake apple pie sweet.',
    'I love sesame snaps jelly-o pudding oat cake brownie. Lemon drops chocolate I love gummies fruitcake tart chocolate. I love sesame snaps sesame snaps shortbread icing. Tiramisu ice cream tart croissant cake. Liquorice candy pudding oat cake lollipop I love jujubes. I love bear claw bear claw I love croissant ice cream caramels apple pie. I love biscuit jelly chupa chups tiramisu lollipop shortbread. Tootsie roll toffee I love lollipop I love.',
    'Jujubes chupa chups dessert macaroon danish tiramisu bonbon gummi bears. Cotton candy chupa chups bear claw bonbon tart. Chocolate cake cheesecake brownie brownie pie dragée sugar plum. Chupa chups bonbon lemon drops cotton candy I love cotton candy sweet roll topping. Pudding marzipan marshmallow halvah jelly beans soufflé marshmallow jelly beans. Caramels halvah sweet roll pastry I love.',
    'Chupa chups I love bonbon I love shortbread jelly beans brownie chocolate cake. Gummies bear claw brownie marzipan cookie pastry brownie. Tiramisu gingerbread danish cookie oat cake donut tiramisu. Gummi bears shortbread topping I love carrot cake apple pie lollipop chocolate cake macaroon. Oat cake caramels chocolate bar danish dragée pastry croissant. I love croissant icing icing cotton candy pastry tiramisu. Jujubes donut jujubes macaroon tootsie roll soufflé marzipan icing candy canes. Fruitcake icing donut lemon drops powder. Candy halvah carrot cake macaroon chocolate bar chocolate bar chocolate bar chupa chups cupcake.',
    'Jelly-o tiramisu muffin ice cream lollipop fruitcake. Fruitcake toffee I love chocolate bar tart caramels. Tootsie roll dessert sugar plum sesame snaps bear claw ice cream sweet jelly beans. Powder wafer marshmallow jelly beans dragée sesame snaps. I love pie pie ice cream donut tiramisu jelly I love. Tootsie roll sesame snaps cupcake ice cream pudding soufflé biscuit gummies dragée. Candy canes apple pie carrot cake I love I love wafer',
    'Shortbread pudding brownie sesame snaps jujubes bear claw dessert cheesecake. Jelly beans brownie I love cotton candy dessert I love sesame snaps. Tootsie roll cheesecake chocolate bar macaroon marshmallow chocolate bar. Bonbon cake chupa chups I love wafer lemon drops. Marzipan soufflé tootsie roll sesame snaps sesame snaps marshmallow biscuit. Halvah soufflé cheesecake ice cream marshmallow chocolate. Halvah jelly powder I love cake gummies I love.',
    'Marzipan tootsie roll apple pie caramels icing powder cookie. Powder halvah I love liquorice dragée biscuit pastry gingerbread. Brownie tart chocolate bar candy canes brownie. Powder toffee marzipan soufflé cheesecake icing. Donut tootsie roll powder pie chocolate cake gummi bears cookie sugar plum wafer. I love jujubes gummies dragée cupcake pudding brownie. Danish oat cake gingerbread I love ice cream. Jujubes oat cake sesame snaps cake chocolate bar.',
    'Sugar plum I love cookie pudding sweet bear claw tootsie roll chupa chups marzipan. Toffee cookie pastry sweet roll cake I love. Chocolate cake tart muffin chupa chups pastry. Tootsie roll toffee muffin powder chupa chups candy cotton candy cake. Lollipop sweet roll pudding icing tootsie roll I love I love. Shortbread cake pastry candy topping oat cake chocolate pastry. Pie tootsie roll jelly beans jelly cookie sesame snaps dessert cake gummi bears. Oat cake gummies cupcake muffin I love chupa chups apple pie bonbon topping.',
    'Chocolate cake marzipan chocolate bar dragée cake jelly-o ice cream. Macaroon fruitcake biscuit pie candy canes macaroon icing powder. Brownie gummies halvah chocolate cake jelly-o muffin cotton candy. Chupa chups gummi bears sugar plum jelly ice cream cake sweet roll chocolate cake. Cupcake oat cake topping cake dragée jelly-o. Pastry candy caramels cupcake cookie lollipop. Jelly beans sweet halvah soufflé marzipan halvah caramels pudding danish. Jelly-o gingerbread lollipop bear claw ice cream I love pastry marshmallow. Carrot cake dessert powder croissant jujubes pie soufflé.'
]

// selecting elements 
const form = document.querySelector('#form');
const amount = document.querySelector('#amount');
const result = document.querySelector('#result');

// add event listener 

form.addEventListener('submit', function(e){
    e.preventDefault();
    const value = parseInt(amount.value);
    const rand = Math.floor(Math.random() * dummyText.length);
    if(value <= 0 || value >10 || isNaN(value)){
        result.innerHTML = `<p>${dummyText[rand]}</p>`;
    }else{
        let slicedArray = dummyText.slice(0, value);
        // console.log(slicedArray);
        let finalArray = slicedArray.map(val => {
            return `<p>${val}</p>`;
        }).join('');
        result.innerHTML = finalArray;
    }
});
