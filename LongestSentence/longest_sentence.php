<?php
  function breakIntoSen($s){
    $result = [];
    $sentenceSep = ['.', '?', '!'];
    $lastSentenceInd = 0;
    for($i = 0; $i < strlen($s); $i++){
      if(in_array($s[$i], $sentenceSep)) {// is this char a sentence sep?
        $senLen = $i - $lastSentenceInd;
        $tempSen = substr($s, $lastSentenceInd, $senLen);
        $result[] = $tempSen;// add the sentence
        $lastSentenceInd = $i + 1;// update the start of the new sentence position
      }
    }
    return $result;
  }

  function countWords($s){
    $wordsInSen = 0;
    $parts = array_filter(explode(' ', $s));// explode and filter (empty strings removed because they evaluate to falsey)
    $wordsInSen = count($parts);
    // use below for manual (or more complex) filter
    // for($i = 0; $i < count($parts); $i++){
    //   if(strlen($parts[$i]) > 0) {
    //     $wordsInSen++;
    //   }
    // }
    // echo 'sen: "' . $s . '", wordCount: ' . count($wordsInSen);
    return $wordsInSen;
  }

  function longestSen($s) {
    $highestWordCount = 0;
    $sentences = breakIntoSen($s);
    for($i = 0; $i < count($sentences); $i++){
      $numWords = countWords($sentences[$i]);
      if($numWords > $highestWordCount){
        $highestWordCount = $numWords;
      }
    }
    return $highestWordCount;
  }

  function runTests(){
    $tests = [
      ['We test coders. Give us a try?', 4],
      ['Forget  CVs..Save time . x x', 2],
      [' A Test? With... Edge Cases! ', 2]
    ];
    echo 'Testing...';
    for($i = 0; $i < count($tests); $i++){
      echo 'Highest word count (expecting ' . $tests[$i][1] . '): ' . longestSen($tests[$i][0]);
    }
  }

  runTests();
?>
