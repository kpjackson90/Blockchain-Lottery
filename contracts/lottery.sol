 pragma solidity ^0.4.23;

contract Lottery {
    address public manager;
    address[] public players;
    
    constructor() public payable {
        manager = msg.sender;
    }
    
    function enter() public payable {
        //require is a global function
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }
    
    function random() private view returns (uint) {
        return uint(keccak256(block.difficulty, now, players));
    }
    
    function pickWinner() public {
        require(msg.sender == manager);
        
        uint index = random() % players.length;
        players[index].transfer(this.balance); 
        players = new address[](0); 
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;//means run everything else in the function
    }
    function getPlayers() public view returns (address[]){
        return players;
    }
    
}