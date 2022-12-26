import React from 'react'

function QuizFunctions() {

    // Quiz 2
    function highestNumber(arrs: number[]): number {
        let largestNum: number = 0;
        arrs.map((val: number) => {
            (val > largestNum) ? largestNum = val : null
        })
        return largestNum
    }

    const theHighest: number = highestNumber([1,2,2,7,8,3,9,11,5,5,2,50])
    console.log(theHighest)
//////////


    // Quiz 3
    function sortingNumber(arrs: number[], headIndex: number, tailIndex: number): number[] {
        if (arrs.length > 1) {
            let index: number = partition(arrs, headIndex, tailIndex);
            if (headIndex < index - 1) { 
                sortingNumber(arrs, headIndex, index - 1);
            }
            if (index < tailIndex) { 
                sortingNumber(arrs, index, tailIndex);
            }
        }

        return arrs;
    }

    function partition(items: number[], head: number, tail: number) {
        let pivot: number = items[Math.floor((tail + head) / 2)]
        let hPointer: number = head
        let tPointer: number = tail

        while(hPointer < tPointer) {
            while (items[hPointer] < pivot){
                hPointer++;
            }

            while (items[tPointer] > pivot){
                tPointer--;
            }
            if (hPointer <= tPointer) {
                swap(items, hPointer, tPointer);
                hPointer++;
                tPointer--;
            }
        }

        return hPointer;
    }

    function swap(items: number[], hIndex: number, tIndex: number) {
        let temp: number = items[hIndex]
        items[hIndex] = items[tIndex]
        items[tIndex] = temp
    }

    var items: number[] = [5,3,2,6,7,9,10];
    var sortedArray = sortingNumber(items, 0, items.length - 1);
    console.log(sortedArray);
/////////


// This information is used in quiz 4, 5 and 6
    interface IUSER {
        name: string
        age: number
        salary: number
        children: number
    }

    const input = [
      {
       name: 'John',
       age: 60,
       salary: 50000,
       children: 3
      },
      {
       name: 'Doe',
       age: 20,
       salary: 30000,
       children: 2
      },
      {
       name: 'Will',
       age: 40,
       salary: 20000,
       children: 1
      },
      {
       name: 'Smith',
       age: 69,
       salary: 25000,
       children: 0
      },
      {
       name: 'Mayer',
       age: 56,
       salary: 60000,
       children: 1
      }
    ]
//////////


    // Quiz 4
    function oldestAge(arrs:IUSER[]): IUSER {
        let oldestUser: IUSER = {name: '', age: 0, salary: 0, children: 0};
        arrs.map((user:IUSER) => {
            if(user.age > oldestUser.age){
                // oldestUser.name = user.name;
                // oldestUser.age = user.age;
                oldestUser = user ;
            }
        })
        return oldestUser
    }

    const oldestUser: IUSER = oldestAge(input)
    console.log(oldestUser)
//////////


    // Quiz 5
    function sortingAge(arrs: IUSER[], head: number, tail: number): IUSER[] {
        if(arrs.length > 1){
            let index: number = partitionObj(arrs, head, tail)
            if(head < index - 1){
                sortingAge(arrs, head, index - 1)
            }

            if(index < tail){
                sortingAge(arrs, index, tail)
            }
        }

        return arrs
    }

    function partitionObj(arrs: IUSER[], head: number, tail: number): number {
        let pivot: IUSER = arrs[Math.floor((head+tail) / 2)]
        let hPointer: number = head
        let tPointer: number = tail

        while(hPointer <= tPointer){
            while(arrs[hPointer].age < pivot.age){
                hPointer++
            }

            while(arrs[tPointer].age > pivot.age){
                tPointer--
            }

            if(hPointer <= tPointer){
                swapObj(arrs, hPointer, tPointer)
                hPointer++
                tPointer--
            }
        }

        return hPointer
    }

    function swapObj(arrs: IUSER[], lIndex: number, rIndex: number): void {
        let tempObj: IUSER = arrs[lIndex]
        arrs[lIndex] = arrs[rIndex]
        arrs[rIndex] = tempObj
    }

    const resultSorting: IUSER[] = sortingAge(input, 0, input.length - 1)
    console.log(resultSorting)
    console.log(resultSorting.map((user:IUSER) => user.age))
//////////


    // Quiz 6
    function findMaxItems(arrs: IUSER[], keyword: keyof IUSER): IUSER {
        let userResult: IUSER = {name: '', age: 0, salary: 0, children: 0}

        if(Object.keys(userResult).includes(keyword)){
            arrs.map((user: IUSER) => {
                if(user[keyword] > userResult[keyword]){
                    userResult = user
                }
            })
        }else{
            throw "The input property doesn't exist"
        }

        return userResult
    }

    const result: IUSER = findMaxItems(input, "age")
    console.log(result)
//////////


      return (
        <div>QuizFunctions</div>
      )
    }

export default QuizFunctions