<?php
	session_start();
	if ((isset($_POST['login'])) && !empty($_POST['username']) && !empty($_POST['username'])){
		if ($_POST['username'] == 'admin@admin.com' && $_POST['password'] == 'admin'){
			$_SESSION['username']='admin@admin.com';
			header("Location: display_list.php");
			exit;
		}
		else {
			$errMsg='Login Failure: Wrong Username or Password';
	}
	print_r($_SESSION);
	}
?>
<!DOCTYPE html>
<html lang="en-US">
	<head>
		<title>Crud Applet with Login</title>
		<meta charset="utf-8" />
	</head>
	<body>
		<h1>Crud Applet wit Login</h1>
		<h2>Login</h2>

		<form action="" method="post">
			<p style="color: red;"><?php echo $errMsg; ?></p>
			<input type="text" class="form-control"
			name="username" placeholder="admin@admin.com"
			required autofocus /><br />
			<input type="pssword" class="form-control" 
			name="password" placeholde="admin" required /></br>
			<button class="btn btn-lg btn-primary btn-block" type="submit" 
			name="login">LOGIN</button>

		</form>
		
	</body>

</html>