const HOST = 'http://127.0.0.1:8000/api/'

const ACCOUNTS = 'accounts/'
const MOVIES = 'movies/'
const REVIEWS = 'reviews/'
const ARTICLES = 'community/'
const COMMENTS = 'comments/'

export default {
	accounts: {
		login: () => HOST + ACCOUNTS + 'login/',
		logout: () => HOST + ACCOUNTS + 'logout/',
		signup: () => HOST + ACCOUNTS + 'signup/',
		signupPlus: (username, nickname) => HOST + ACCOUNTS + 'signup_plus/' + `${username}/` + `${nickname}/`,
		changePassword: () => HOST + ACCOUNTS + 'password/change/',

		currentUserInfo: () => HOST + ACCOUNTS + 'user/',
		profile: () => HOST + ACCOUNTS + 'profile/',
		nickname: nickname => HOST + ACCOUNTS + 'nickname/' + `${nickname}/`,
		follow: (myname, yourname) => HOST + ACCOUNTS + 'follow/' + `${myname}/` + `${yourname}/`,
		changeProfileImage: (username) => HOST + ACCOUNTS + 'profile_image/' + `${username}/`,
		newNickname: (username, newNickname) => HOST + ACCOUNTS + 'change_nickname/' + `${username}/` + `${newNickname}/`,
		deleteUser: username => HOST + ACCOUNTS + 'delete_user/' + `${username}/`,
		makeCard: username => HOST + ACCOUNTS + 'make_card/' + `${username}/`,
		deleteCard: cardPk => HOST + ACCOUNTS + 'delete_card/' + `${cardPk}/`,
		mostLikedUsers: () => HOST + ACCOUNTS + 'most_liked_users/'
	},
	movies: {
		movies: () => HOST + MOVIES,
		movie: moviePk => HOST + MOVIES + `${moviePk}/`,

		nowMovies: () => HOST + MOVIES + 'now_playing/',
		lastMovies: () => HOST + MOVIES + 'last_year/',
		winMovies: () => HOST + MOVIES + 'winner/',

		recommendMovies: username => HOST + MOVIES + 'recommend/' + `${username}/`,

		selectMovie: moviePk => HOST + MOVIES + 'select/' + `${moviePk}/`,

		searchMovie: query => HOST + MOVIES + 'search/' + `${query}/`,
		
		roundSelect: exponent => HOST + MOVIES + 'matchup/' + `${exponent}/`,
		worldCup: exponent => HOST + MOVIES + 'worldcup/' + `${exponent}/`,
		addVote: movieId => HOST + MOVIES + 'add_vote/' + `${movieId}/`,
	
		reviews: moviePk => HOST + MOVIES + `${moviePk}/` + REVIEWS,
		deleteReview: reviewPk => HOST + MOVIES + 'delete_review/' + `${reviewPk}/`,
		comment: (moviePk, reviewPk) =>
			HOST + MOVIES + `${moviePk}/` + REVIEWS + `${reviewPk}/`,


		genres: () => HOST + MOVIES + 'genres/',
		like_genre: () => HOST + MOVIES + 'like_genre/'
	},
	articles: {
    articles: () => HOST + ARTICLES,
    article: articlePk => HOST + ARTICLES + `${articlePk}/`,
    likeArticle: articlePk => HOST + ARTICLES + `${articlePk}/` + 'like/',
    comments: articlePk => HOST + ARTICLES + `${articlePk}/` + COMMENTS,
    comment: (articlePk, commentPk) =>
      HOST + ARTICLES + `${articlePk}/` + COMMENTS + `${commentPk}/`,		
	}
}
