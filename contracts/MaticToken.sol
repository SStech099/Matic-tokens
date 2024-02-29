// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Matic1 is ERC20, ERC20Permit, Ownable {
    constructor(address initialOwner)
        ERC20("Matic 1", "MTK")
        ERC20Permit("Matic 1")
        Ownable(initialOwner)
    {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }
}