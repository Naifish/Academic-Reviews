<?php 

include('imp_files/con_file.php');

$post_exist=false;$comment_exisst=false;$innerComment_exist=false;


ob_start();
//include_once __DIR__ .'/src/Facebook/autoload.php';
 require_once('assets/facebook-php-sdk-for-pagePosts/src/facebook.php');
 
$arr = [];
	$arr['appId'] = '503274339853633';
	$arr['secret'] = 'b0e4fc6e3ccfada390ba638288ae3262';
	$arr['retunUrl'] = 'http://localhost/fb/';

	
$fb = new Facebook($arr);


$page_id = '1673010142952917';
$pagefeed = $fb->api("/" . $page_id . "/feed");
$allPost = $pagefeed;

echo '<pre>';



foreach ($allPost['data'] as $allPost1) {
	$postID=null;$postSelf=null;
	echo '<pre>';
	
	if(isset($allPost1['message'])){
		print_r('<b>'.$allPost1['message'].'</b><br>');
		print_r('<b>'.$allPost1['id'].'</b><br>');

		$postID=$allPost1['id'];
		$postSelf=$allPost1['message'];
		$insrtQry=mysql_query("INSERT INTO fb_post(fb_post_id,fb_post) VALUES ('$postID','$postSelf')");
	}
	//print_r($allPost1['id']);



	$comments = $fb->api($allPost1['id'] . '/comments');
	//print_r($comments);
	foreach ($comments['data'] as $value) {
		//print_r($commentsz);
		$commentID=null;$commentSelf=null;

		if (isset($value['message'])) {
			# code...
			print_r('<br><b>Comments:</b>'.$value['message'].'<br>');
			print_r('<br><b>ID:</b>'.$value['id'].'<br>');

			$commentID=$value['id'];
			$commentSelf=$value['message'];
			$insrtQry=mysql_query("INSERT INTO fb_comment(fb_post_id,fb_comment_id,fb_comment) VALUES ('$postID','$commentID','$commentSelf')");
		}
		//print_r('<br>Profile Name: </b>'.$value['from']['name']);



		$commentsz = $fb->api($value['id'] . '/comments');
		foreach ($commentsz['data'] as $innerComments) {

			$innerCommentID=null;$innerCommentSelf=null;

			if (isset($innerComments['message'])) {
				# code...
				print_r('<br><b>Inner Comments:</b>'.$innerComments['message']);
				print_r('<br><b>Inner ID:</b>'.$innerComments['id']);

				$innerCommentID=$innerComments['id'];
				$innerCommentSelf=$innerComments['message'];
				$insrtQry=mysql_query("INSERT INTO fb_innercomment(fb_comment_id,fb_innercomment_id,fb_innercomment) VALUES ('$commentID','$innerCommentID','$innerCommentSelf')");
			}
			//print_r('<br><b>Profile Name: </b> </b>'.$innerComments['from']['name']);
		}
	}
	
}

?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
</body>
<script type="text/javascript">
	
var a = 'http://graph.facebook.com/oauth/access_token?type=client_cred&client_id=890086861106721&client_secret=b5cfd0e14bed4682478701c9863ddd79';
var query = 'http://graph.facebook.com/q?SELECT page_id, name from page';

</script>
</html>