# Anitomo Anime API

Anitomo is an anime API that provides information about various anime series from different sources. It offers endpoints to retrieve anime details, episode information, and more from different anime providers.

## Installation and Usage

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd anitomo`
3. Install dependencies: `npm install`
4. Create a `.env` file based on the provided `.env.example` and fill in the required information.
5. Start the development server: `npm run dev`

## Endpoints

The API provides the following endpoints for retrieving anime information from different providers:

- `GET /v1/animefox`: Retrieve anime information from AnimeFox.
- `GET /v1/animepahe`: Retrieve anime information from AnimePahe.
- `GET /v1/animesaturn`: Retrieve anime information from AnimeSaturn.
- `GET /v1/crunchyroll`: Retrieve anime information from Crunchyroll.
- `GET /v1/enime`: Retrieve anime information from Enime.
- `GET /v1/gogoanime`: Retrieve anime information from GoGoAnime.
- `GET /v1/marin`: Retrieve anime information from Marin.
- `GET /v1/zoro`: Retrieve anime information from Zoro.

For more details about each endpoint, refer to the respective source files in the `src/v1/routes` directory.

## Documentation

For detailed API documentation and usage examples, please refer to the [Anitomo API Documentation](https://documenter.getpostman.com/view/29367088/2s9Y5YT3H9).

## Acknowledgments

Special thanks to the following packages used in this project:

- [Consumet.ts](https://github.com/consumet/consumet.ts)
- [Website](https://github.com/consumet/consumet.org)
- [Providers Status](https://github.com/consumet/providers-status)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
anitomo
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ feature
│  │     │  │  └─ test
│  │     │  ├─ main
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ feature
│  │           │  └─ test
│  │           └─ main
│  ├─ objects
│  │  ├─ 00
│  │  │  ├─ 3a07772633189d6a5151e102996e4e96e6f7c1
│  │  │  ├─ 9b123d36e4c574ee28a3cbb41a79a20e62e00f
│  │  │  └─ beeec46d613972cadb5e7131d4a90a737dfee5
│  │  ├─ 01
│  │  │  └─ 58a35300b68a8b7d333ecf7aaf1f3256112ff3
│  │  ├─ 0c
│  │  │  └─ 549dfbdfd274103841cb71f8164a3a4fe77cc9
│  │  ├─ 0d
│  │  │  └─ ff9a00a3f7d7f86eb1aeb717919098cc4ab17c
│  │  ├─ 14
│  │  │  └─ 1b57ad6bf55a8587a206356346d42bd367bd20
│  │  ├─ 16
│  │  │  ├─ cf75895bde6e3aee5dccd4648c4fe20926b383
│  │  │  └─ e179577a26e61993d31edca145d4344355694a
│  │  ├─ 18
│  │  │  └─ b95ec9a122e59a9a16ad2fb3d225f0a47cb296
│  │  ├─ 19
│  │  │  └─ 1a3b7cc45f15126b7305df08f205f774dd1efd
│  │  ├─ 21
│  │  │  └─ 707f5a7bc1fa748c977603709e1237c7ef4cce
│  │  ├─ 22
│  │  │  ├─ 00c92c877521befcc68937e63036747ff48156
│  │  │  └─ 7513810a42ff50adfa2dfb0945c527318ecc94
│  │  ├─ 23
│  │  │  └─ 9992718adb8bb403a0bf86e3a1198e20cfa103
│  │  ├─ 24
│  │  │  └─ b12f7a8acb61c9aac9301093ae08bbb905a072
│  │  ├─ 26
│  │  │  ├─ 86dd09a1fe1bb3428ee7f91d78eebe7ace1caf
│  │  │  └─ 96c084ecb02cd132d1010812eeaedac95fe965
│  │  ├─ 29
│  │  │  └─ 1afafe01d465d3671dcf8cfc460772f5680a9c
│  │  ├─ 2c
│  │  │  └─ 0056762bac91877a6ed8da360b77e289dea793
│  │  ├─ 32
│  │  │  └─ 9a5c4f5752c49ea4d1675385ecdb5b4965dc2a
│  │  ├─ 35
│  │  │  └─ ddd16dc0541bfecb09e9301ff3b9d833ca8747
│  │  ├─ 38
│  │  │  └─ 6c028a0e4c322f3959d31d1ce7f1b054a10a18
│  │  ├─ 39
│  │  │  └─ c38708799d2165259ebf52e1d7e07e37f89d5c
│  │  ├─ 3a
│  │  │  └─ d1dd95ca416e392fa988b4ab5c3a235efdbb97
│  │  ├─ 3e
│  │  │  └─ 8b6c05472daf5882f0e0d4739c8266d00fda2f
│  │  ├─ 40
│  │  │  └─ 0965efc8cff693b59458ac20c3ec575aad94eb
│  │  ├─ 41
│  │  │  ├─ 97c73f3768d275cfe52672dc70c38208e24ab4
│  │  │  └─ e35149884dfcbd3a32e62099f4f96056ffe83a
│  │  ├─ 43
│  │  │  └─ 53cb9f57b84e5031559e97b5cac945b01527eb
│  │  ├─ 46
│  │  │  └─ 2125f31b7197b140af86f64c0ab9d79b0d94e4
│  │  ├─ 47
│  │  │  ├─ c46fbbda2af250853dc9da3b8b655f920c7265
│  │  │  └─ db230e31c8a2ab7347ac8675baf6197895a55a
│  │  ├─ 49
│  │  │  ├─ 947a87edffb37faaa815e18c52214925507b0b
│  │  │  └─ 95ec986cce9aba48aa6a2cf799c14756969940
│  │  ├─ 4c
│  │  │  ├─ 1be5f5a0d725e30a666ec20a564d64adccd6a2
│  │  │  └─ 6d0a6a8797c17fb2e4ea68aeb3fe5448625a7b
│  │  ├─ 4d
│  │  │  └─ f7a7742a83395636779b973050738f22f46bb8
│  │  ├─ 50
│  │  │  ├─ 1bf71d969068e4ab41c15cf96a61f380c0f11d
│  │  │  └─ a8573d7b754ad4f6d9356dfb939de266bfd535
│  │  ├─ 52
│  │  │  └─ c2fd0ccb3d591f6731847dbe6017bb1f9d81e4
│  │  ├─ 55
│  │  │  └─ a350484d5e7fbe657dbcb98e7fc54d0a375e44
│  │  ├─ 57
│  │  │  └─ dd15e021bde8075404073eff5c9cded2b944c9
│  │  ├─ 5d
│  │  │  └─ 613882f2c0cf98f87e274dbc6704b5cd1211bd
│  │  ├─ 5f
│  │  │  └─ 268cb0b0ff87607570ccb18d638a3039089018
│  │  ├─ 62
│  │  │  └─ 51e49750f73bde7b6924859630766578418e84
│  │  ├─ 63
│  │  │  └─ 1f73b4e2a12820a10d8fde158f3599a3996869
│  │  ├─ 68
│  │  │  └─ 883ca64d08654664a99c6eefa6569ca781937c
│  │  ├─ 6a
│  │  │  └─ 2ed38ec858b677fe4c5cd30cc766553cbdccb4
│  │  ├─ 6b
│  │  │  └─ 77e59a527e6bd30e50b033991679dbcbbae050
│  │  ├─ 6d
│  │  │  └─ ddef4d848c64cd3347cda7e0b8b7b8241a6e7f
│  │  ├─ 6e
│  │  │  └─ 7b403c1f992d64b27cb957fc80c4fd93b59f77
│  │  ├─ 6f
│  │  │  ├─ 67b95ee8e4246f0e5a503ef02034f220e1342b
│  │  │  ├─ 9d0563c53f4448793129fc688f6b425fc1b0c6
│  │  │  ├─ b7f110c5b3c86f18ca8d0d274813ee366f931d
│  │  │  └─ fedd7c1c12846cc4e0ca12cf164f877232177c
│  │  ├─ 72
│  │  │  └─ 65b2532749016c18ce1ea65b64d0c62fc7e7f3
│  │  ├─ 74
│  │  │  └─ 9951100ed74753e92ad8e5f04ec9b7203a4c08
│  │  ├─ 75
│  │  │  └─ 5ab069f936a3bbf9a191748117a54d46786d55
│  │  ├─ 76
│  │  │  └─ 0c83076f553e82e653701c7403c655a5aa0902
│  │  ├─ 78
│  │  │  ├─ 7660c14e2f71c45eefb2c1a23187dc3f980b6f
│  │  │  └─ e7a42494da56ba04fe8ccc0b64eabedd771fe5
│  │  ├─ 7b
│  │  │  └─ 05af21092b3acb14fa84f5e79521e5fbe0d96c
│  │  ├─ 7c
│  │  │  └─ 5ad3ce1a8449b8c3b76e215ec797decfe57b9b
│  │  ├─ 7f
│  │  │  ├─ 2c9a21eb364031c5388eea708500654e7efc65
│  │  │  └─ 588fd27c904c3ae0ddf76ab6d60a9c4a32f40a
│  │  ├─ 80
│  │  │  └─ 86dfd638727305f6cbd4c8e6194fef17be527a
│  │  ├─ 81
│  │  │  └─ 7e4980ed81ba1c642aec5dac9e153da0c023a0
│  │  ├─ 83
│  │  │  ├─ 389caedb2e865537e5b9336a8388590a9f9109
│  │  │  └─ 9dd2ecacb1e6b6d598a636706fa24c7d54c743
│  │  ├─ 84
│  │  │  └─ d0238253a29918c1596c27033c58693e54d177
│  │  ├─ 86
│  │  │  └─ 2668c98b28371b7857d3e46f1dc711e4862d67
│  │  ├─ 88
│  │  │  └─ 71016ac2bbf316ff335370d68450efbd577e4b
│  │  ├─ 89
│  │  │  └─ ef1bc03ef373e35ae6d3a2be40f2b52acfa0ae
│  │  ├─ 8b
│  │  │  └─ 0bd7c02e7db1c98994a49b8cbe0e5cbd9a4cbf
│  │  ├─ 8d
│  │  │  └─ 327c30370f6c541b244cbf73c1029638a398a3
│  │  ├─ 91
│  │  │  └─ 2f695aeaad7285fc0f0601c36d92c6907ab744
│  │  ├─ 92
│  │  │  └─ b13d05de227f2748a41e1877f9e6df68e99b8f
│  │  ├─ 94
│  │  │  └─ 895c1e401d62ccabd9680488d1b8e6419b2f65
│  │  ├─ 96
│  │  │  └─ 34b7b2e156517f3b7836e6c02cc4fd763f6271
│  │  ├─ 98
│  │  │  └─ e6cf6dc483dcfe44cf0cd896867532e05cd660
│  │  ├─ 99
│  │  │  └─ 861f23a2eb8fc3925d71e9ae1d3ba44f0da41c
│  │  ├─ 9b
│  │  │  ├─ 0f3d4946e54a44ad9346f19651b6675dd40ba0
│  │  │  └─ c0a9c54b4d7a2c20540db8009136e3626c5227
│  │  ├─ 9c
│  │  │  └─ 4f498782ffb794392bcc1adf51bb5d0de58b02
│  │  ├─ 9e
│  │  │  └─ 91b03bdb0970a22e547a9c6cbabec7f5153fc9
│  │  ├─ a0
│  │  │  └─ 4e5ca886752456e9a7f986588dca639cbcf288
│  │  ├─ a1
│  │  │  └─ 94dc0f97de32809605f506fe7db558953e8334
│  │  ├─ a2
│  │  │  └─ ca7857acf51ed6b115f845208cd70128a2f9ec
│  │  ├─ a3
│  │  │  └─ bd6436d98feb1ab8690873901e251faea265d1
│  │  ├─ a4
│  │  │  └─ 76a6c1147495b30b3093c646bad4c4e9371e55
│  │  ├─ a5
│  │  │  └─ 7e8b3844186e2d02d670fd3c8a10fafd0f3332
│  │  ├─ ac
│  │  │  ├─ 7f07408152003f8da8e6b5c1bf83858d6b3b93
│  │  │  └─ fadddaf622bfd07bbafad15a444667a27e3e8b
│  │  ├─ af
│  │  │  └─ d65df1c5f8b5ed4831a8d05c513944d3d96ccf
│  │  ├─ b0
│  │  │  ├─ 0bb16957f36a4d8b93480e0e431cade0320baa
│  │  │  └─ e85327f9c3b38ad431de0c8c6762f7df01d19e
│  │  ├─ b2
│  │  │  └─ 14fccf98418bf50de90acc07c527a7fc2bef66
│  │  ├─ b4
│  │  │  └─ 5e092024918bf92988a5af3f776bbb22cfddb5
│  │  ├─ b5
│  │  │  └─ 95c8f069b6eba555e32621a4956ea5a2d4a297
│  │  ├─ b6
│  │  │  └─ d76eb4e549dab6e79f5d40ebd0602b3bb05d4e
│  │  ├─ ba
│  │  │  └─ 9a9e510916d05c648d7c5c6f53b83db482ceac
│  │  ├─ bb
│  │  │  └─ 6811f48aa77a0b7d234b140954999ffc4cd3fc
│  │  ├─ bd
│  │  │  └─ 18effa18a6005e2b64a5fa505141ec799d1b5b
│  │  ├─ be
│  │  │  └─ a8928510e2c26da745f7b77987ffb6f368cb1e
│  │  ├─ bf
│  │  │  └─ 1f1cd247113847388d3f659ce20e854b439bc0
│  │  ├─ c0
│  │  │  ├─ 474cea6c818ce580d8d3dfa052324f9e0d6f2d
│  │  │  ├─ 5048a9d01fb7cb5a17f7296051211d39f1ce35
│  │  │  └─ c68b1ca0498b5602a5d359f295413619e89771
│  │  ├─ c1
│  │  │  └─ d54a96d85dd05dcbf8b9fe2f16524ee3879135
│  │  ├─ c4
│  │  │  └─ 169c7831e0b8fbe5e3be278ea3ed478a96a14e
│  │  ├─ c5
│  │  │  ├─ 02fbbca206fa00caa19a4678a67b24543f69e9
│  │  │  └─ 1ed967f6e506e72deaa0fa8848723935501f50
│  │  ├─ c7
│  │  │  └─ f935d2d32e2582386d51db77601fe16846fafb
│  │  ├─ cc
│  │  │  └─ 52456189a71986a3d98353addf2534133c49fd
│  │  ├─ cf
│  │  │  └─ 9d1ead49fa6c80c06dfbd487518aaa19d61303
│  │  ├─ d1
│  │  │  └─ e5957375454fa29f0afc64e6871fb1227c2269
│  │  ├─ d4
│  │  │  ├─ 0c77ce81acc77d2b8aa7f76b41fdb0483f4a2d
│  │  │  └─ eb176531b5dc2a1a43981acd92a89671132220
│  │  ├─ d5
│  │  │  └─ e5bce4ec8556ce5348da496d996d0e478344c0
│  │  ├─ d6
│  │  │  └─ 6eb566255b367f7f44b0644b4580b44fb5ac2b
│  │  ├─ d7
│  │  │  └─ 7134ca87e222e5c46f64f1afef6db13b62d421
│  │  ├─ d8
│  │  │  ├─ 20c4992674d645223db7847c3ef982f196941e
│  │  │  └─ 495371a8351c304d560080cc5f0985e2109f19
│  │  ├─ e2
│  │  │  ├─ 1b0aa3183f149851f7f0e22b42e59f28ac58f2
│  │  │  └─ b96626f0e15fc555e4a2351c483181181eba0c
│  │  ├─ e3
│  │  │  └─ 8cb809be30658b87b9a66a7baa651602b676b2
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ e7
│  │  │  └─ 654bdefe16ba3b0999ff09eb8c9d2f96817c75
│  │  ├─ e8
│  │  │  ├─ 09588402f96ea46967e38fc401b5220788d7ac
│  │  │  └─ c708c29354344e2822f1871276bc337be90ef4
│  │  ├─ ea
│  │  │  └─ f25be6f872d8683ed8c8df93765823a7f01c63
│  │  ├─ eb
│  │  │  └─ 7f499cd5d950f122fe9d5acaff3484c6ef3202
│  │  ├─ ed
│  │  │  └─ 2038c1c9a5fdcabccc70ac95918fe8828906a4
│  │  ├─ ee
│  │  │  └─ 7f28c1bbb5fb5c52bc37802695c15068d1a9cb
│  │  ├─ ef
│  │  │  ├─ 424e225eef6569fc264af761a41152d1edf50d
│  │  │  └─ 680338854825e099bd5ace9332dffff2d3e16d
│  │  ├─ f0
│  │  │  ├─ 5d445056fa42f6abcd701d231fa500766a1c0c
│  │  │  └─ 85427f914b7be226321517657b95fa8d681a49
│  │  ├─ f2
│  │  │  └─ 231a8be0112cd54fc39166a44d44ed4155a453
│  │  ├─ f3
│  │  │  └─ 9b5def625a2bf9915825fba7e716aded3bd552
│  │  ├─ f5
│  │  │  ├─ 04d1672f5ec2956d2ac1e73fd638ca9cc54aa9
│  │  │  └─ 0d3ef59481bf8c31a122d254310d296a02c733
│  │  ├─ f6
│  │  │  └─ 60b552193ae4e14c240eccecdd15ebb22a0bfe
│  │  ├─ f7
│  │  │  └─ 376385abd0e2613c6129e6936770582a9b5a1d
│  │  ├─ fa
│  │  │  └─ b146ab11eb1363492dfac155af1c13f3cae65c
│  │  ├─ fb
│  │  │  └─ 7b54d9c76820265804c3dcd26b584360cee432
│  │  ├─ fc
│  │  │  └─ dae5017c0bd58c46dea0b7698d67126f199722
│  │  ├─ fd
│  │  │  └─ 03080d162f1c57b6bbd1a5e445661a244c62a5
│  │  ├─ fe
│  │  │  └─ 5174419f517c2fa63810834a4665a2af44f931
│  │  ├─ info
│  │  └─ pack
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ feature
│     │  │  └─ test
│     │  ├─ main
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     ├─ feature
│     │     │  └─ test
│     │     └─ main
│     └─ tags
├─ .github
│  └─ workflows
│     ├─ greetings.yml
│     ├─ labeler.yml
│     ├─ main.yml
│     └─ stale.yml
├─ .gitignore
├─ jest.config.ts
├─ LICENSE
├─ README.md
└─ src
   ├─ index.ts
   ├─ middleware
   │  ├─ error-handler.ts
   │  └─ request-limit.ts
   ├─ server.ts
   ├─ utils
   │  ├─ async-wrapper.ts
   │  └─ response-template.ts
   ├─ v1
   │  └─ routes
   │     ├─ animefox
   │     │  └─ animefox.ts
   │     ├─ animepahe
   │     │  └─ animepahe.ts
   │     ├─ animesaturn
   │     │  └─ animesaturn.ts
   │     ├─ crunchyroll
   │     │  └─ crunchyroll.ts
   │     ├─ enime
   │     │  └─ enime.ts
   │     ├─ gogoanime
   │     │  └─ gogoanime.ts
   │     ├─ index.ts
   │     ├─ marin
   │     │  └─ marin.ts
   │     └─ zoro
   │        └─ zoro.ts
   └─ __tests__

```