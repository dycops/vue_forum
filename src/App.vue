<template>
			<div id="header-top">
				<div class="wrapper">
					<ul class="right">
						<li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
						<li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
						<li><a href="#" target="_blank"><i class="fa fa-youtube-play"></i></a></li>
						<li><a href="#" target="_blank"><i class="fa fa-twitch"></i></a></li>
						<li><a href="#" target="_blank"><i class="fa fa-steam"></i></a></li>
					</ul>
					<ul class="load-responsive" rel="Top menu">
						<li><a href="podcasts.html">Podcasts</a></li>
						<li><a href="messages.html"><span>Private messages</span></a>
							<ul class="sub-menu">
								<li><a href="messages.html">Conversation list</a></li>
								<li><a href="messages-conversation.html">Single conversation</a></li>
								<li><a href="messages-write.html">Start new conversation</a></li>
							</ul>
						</li>
						<li><a href="#drop-the-bass">Read Later<small>2</small></a>
							<div class="drop">
								<div class="notify-header">Articles I should to read later</div>
								<!-- <div class="nofify-empty">
									<i class="fa fa-folder-open-o"></i>
									<b>No articles here yet</b>
									<span>You can save articles to read them later</span>
								</div> -->
								<ol class="notify-list">
									<li>
										<a href="post.html" class="notify-content">
											<span class="article-thumb"><img src="images/photos/image-35.jpg" alt="" /></span>
											<span class="notify-head">
												<span class="notify-user"><b>Lorem Ipsum</b></span>
											</span>
											<span class="notify-text">Facete eruditi an vis, vel utamur aliquid partiendo ex</span>
											<span class="notify-date">11:22, Sep 11, 2012</span>
										</a>
									</li>
									<li>
										<a href="post.html" class="notify-content">
											<span class="article-thumb"><img src="images/photos/image-36.jpg" alt="" /></span>
											<span class="notify-head">
												<span class="notify-user"><b>Lorem Ipsum 2</b></span>
											</span>
											<span class="notify-text">Te deserunt eleifend usu, patrioque eloquentiam qui in</span>
											<span class="notify-date">11:22, Sep 11, 2012</span>
										</a>
									</li>
								</ol>
								<div class="notify-footer"><a href="#clear-read-later">Clear this list</a></div>
							</div>
						</li>
						<li><a href="login.html">Login page</a></li>
						<li><a href="#">Buy now</a></li>
					</ul>
				</div>
			</div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
</style>
