// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract House {
    uint256 public avg;

    function intialize(uint256 _avg) public {
        avg = _avg;
    }
}
