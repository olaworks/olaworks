// HOMEWORK PAGE 2 FORMS
function process1() {

    number1 = document.forms["IntegerForm"].elements["integer1"].value;
    number2 = document.forms["IntegerForm"].elements["integer2"].value;
    number3 = document.forms["IntegerForm"].elements["integer3"].value;

    n1 = parseInt(number1);
    n2 = parseInt(number2);
    n3 = parseInt(number3);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      window.alert("Please enter all fields with any real numbers- postive, negative, or decimals.");
    }

    else {

    sum = n1 + n2 + n3;
    average = (n1 + n2 + n3) / 3;
    product = n1 * n2 * n3;

    min = Math.min(n1, n2, n3);
    max = Math.max(n1, n2, n3);

    document.forms["IntegerForm"].elements["sumResult"].value = sum;
    document.forms["IntegerForm"].elements["averageResult"].value = average;
    document.forms["IntegerForm"].elements["productResult"].value = product;
    document.forms["IntegerForm"].elements["smallestNumber"].value = min;
    document.forms["IntegerForm"].elements["largestNumber"].value = max;
  }

}

function process2(){
      test5_number1 = document.forms["Test5Form"].elements["test5_integer1"].value;
      test5_number2 = document.forms["Test5Form"].elements["test5_integer2"].value;
      test5_number3 = document.forms["Test5Form"].elements["test5_integer3"].value;
      test5_number4 = document.forms["Test5Form"].elements["test5_integer4"].value;
      test5_number5 = document.forms["Test5Form"].elements["test5_integer5"].value;

      n1_5 = parseInt(test5_number1);
      n2_5 = parseInt(test5_number2);
      n3_5 = parseInt(test5_number3);
      n4_5 = parseInt(test5_number4);
      n5_5 = parseInt(test5_number5);

      if (isNaN(n1_5) || isNaN(n2_5) || isNaN(n3_5) || isNaN(n4_5) || isNaN(n5_5)) {
        window.alert("Please enter all fields with any real numbers- postive, negative, or decimals.");
      }

      else {

      var displayzeros = 0;

      if (n1_5 == 0) {
        displayzeros = displayzeros + 1;
      }

      if (n2_5 == 0) {
        displayzeros = displayzeros + 1;
      }

      if (n3_5 == 0) {
        displayzeros = displayzeros + 1;
      }

      if (n4_5 == 0) {
        displayzeros = displayzeros + 1;
      }

      if (n5_5 == 0) {
        displayzeros = displayzeros + 1;
      }

      document.forms["Test5Form"].elements["zerosResult"].value = displayzeros;

      var displaypostiveint = 0;

      if (n1_5 > 0) {
        displaypostiveint = displaypostiveint + 1;
      }

      if (n2_5 > 0) {
        displaypostiveint = displaypostiveint + 1;
      }

      if (n3_5 > 0) {
        displaypostiveint = displaypostiveint + 1;
      }

      if (n4_5 > 0) {
        displaypostiveint = displaypostiveint + 1;
      }

      if (n5_5 > 0) {
        displaypostiveint = displaypostiveint + 1;
      }

      document.forms["Test5Form"].elements["positiveintResult"].value = displaypostiveint;

      var displaynegativeint = 0;

      if (n1_5 < 0) {
        displaynegativeint = displaynegativeint + 1;
      }

      if (n2_5 < 0) {
        displaynegativeint = displaynegativeint + 1;
      }

      if (n3_5 < 0) {
        displaynegativeint = displaynegativeint + 1;
      }

      if (n4_5 < 0) {
        displaynegativeint = displaynegativeint + 1;
      }

      if (n5_5 < 0) {
        displaynegativeint = displaynegativeint + 1;
      }

      document.forms["Test5Form"].elements["negativeintResult"].value = displaynegativeint;

    }
  }

    function process3(){
      //HOMEWORK PAGE 3 FORMS

        hwAvgGrade        = document.forms["GetFinalGradeForm"].elements["hwAvg"].value;
        midExamGrade      = document.forms["GetFinalGradeForm"].elements["midExam"].value;
        finalExamGrade    = document.forms["GetFinalGradeForm"].elements["finalExam"].value;
        particpationGrade = document.forms["GetFinalGradeForm"].elements["particpation"].value;

        hg = parseInt(hwAvgGrade);
        mg = parseInt(midExamGrade);
        fg = parseInt(finalExamGrade);
        pg = parseInt(particpationGrade);

        if (hg < 0 || hg > 100 || isNaN(hg) || mg < 0 || mg > 100 || isNaN(mg) || fg < 0 || fg > 100 || isNaN(fg) || pg < 0 || pg > 100 || isNaN(pg) ) {
         window.alert("Please enter all fields, only using numbers between 0 and 100.");

         //If value input is invalid (not between 0-100 or NanN) following code clears input- nice for user as opposed to manuel reset w/ Reset Button UNLESS they just forgot to put a number- annoying to have to re-input..
         /*document.forms["GetFinalGradeForm"].elements["hwAvg"].value = "";
         document.forms["GetFinalGradeForm"].elements["midExam"].value = "";
         document.forms["GetFinalGradeForm"].elements["finalExam"].value = "";
         document.forms["GetFinalGradeForm"].elements["particpation"].value = "";*/
        }

        else {
        tfa = (0.5 * hg) + (0.2 * mg) + (0.2 * fg) + (0.1 * pg);

        document.forms["GetFinalGradeForm"].elements["theFinalAverage"].value = tfa;

        letterA = "A";
        letterB = "B";
        letterC = "C";
        letterD = "D";
        letterF = "F";
        retakeADVICE = "**STRONLY ADVISED: Student should Retake Course**";

         if (tfa >= 90) {
           document.forms["GetFinalGradeForm"].elements["theFinalGrade"].value = letterA;
         }
         else if (tfa >= 80) {
           document.forms["GetFinalGradeForm"].elements["theFinalGrade"].value = letterB;
         }
         else if (tfa >= 70) {
           document.forms["GetFinalGradeForm"].elements["theFinalGrade"].value = letterC;
         }
         else if (tfa >= 60) {
           document.forms["GetFinalGradeForm"].elements["theFinalGrade"].value = letterD;
           document.forms["GetFinalGradeForm"].elements["retake"].value = retakeADVICE;
         }
         else {
           document.forms["GetFinalGradeForm"].elements["theFinalGrade"].value = letterF;
           document.forms["GetFinalGradeForm"].elements["retake"].value = retakeADVICE;
         }

    }



      function process4() {
        item1numtotal = document.forms["SalesForm"].elements["item1"].value;
        item2numtotal = document.forms.["SalesForm"].elements["item2"].value;
        item3numtotal = document.forms.["SalesForm"].elements["item3"].value;
        item4numtotal = document.forms.["SalesForm"].elements["item4"].value;
        
      }
