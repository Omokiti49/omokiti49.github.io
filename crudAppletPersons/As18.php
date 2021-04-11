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
