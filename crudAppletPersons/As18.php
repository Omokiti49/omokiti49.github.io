<!DOCTYPE html>
<html>
<body>

<div id="demo">
  <h2>Let AJAX change this text</h2>
  <button type="button" onclick="loadDoc()">Change Content</button>
</div>

<script>
var country_usa;
var country_1;
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	  country_usa = JSON.parse(this.responseText).Global.NewConfirmed;
	  country_1 = JSON.parse(this.responseText).Countries[0].Country;
      document.getElementById("demo").innerHTML = country_usa;
	 
    }
  };
  var api = "https://omokiti49.github.io/crudAppletPersons/As18.php";
  xhttp.open("GET", api, true);
  xhttp.send();
}
</script>

</body>
</html>
<?php 
	echo "<a target='_blank' href='https://omokiti49.github.io/crudAppletPersons.git'> GitHub repo</a> <br>"
		main();
function main () {
	
	$apiCall = 'https://api.covid19api.com/summary';
	$json_string = curl_get_contents($apiCall);
	$obj = json_decode($json_string);
	
	$death_arr = Array();
		$arr2 = Array();
	foreach($obj->Countries as $i){
		array_push($death_arr, $i->Country);
		array_push($arr2, $i->$i->TotalDeaths);	
	}
		array_multisort($arr2, SORT_DESC, $death_arr);
		print_r($death_arr);

#-----------------------------------------------------------------------------
// read data from a URL into a string
function curl_get_contents($url) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    $data = curl_exec($ch);
    curl_close($ch);
    return $data;
}
?>
