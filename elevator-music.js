const ytdl = require('ytdl-core');

const ytSong = 'https://www.youtube.com/watch?v=IH6C3-GUai8';
const elevatorChannel = '771888890193772575';

module.exports = client => {
	client.on('voiceStateUpdate', async (oldState, newState) => {
		if ((newState.channelID === elevatorChannel) || (oldState.channelID === elevatorChannel)) {
			const oldVoice = oldState.channelID;
			const newVoice = newState.channelID;
			const voiceChannel = newState.guild.channels.cache.get(elevatorChannel);

			if (oldVoice != newVoice) {
				if (oldVoice !== elevatorChannel) {
					try {
						// eslint-disable-next-line no-var
						var connection = await voiceChannel.join();
					}
					catch (error) {
						console.log(error);
					}

					const dispatcher = connection.play(ytdl(ytSong))
						.on('finish', () => {
							connection.play(ytdl(ytSong));
						})
						.on('error', error => {
							console.log(error);
						});
					dispatcher.setVolumeLogarithmic(1 / 5);
					client.user.setActivity('Farstuhlmusik ab', { type : 'PLAYING' });

				}
				else if (voiceChannel.members.size === 1) {
					voiceChannel.leave(1000);

					const setRandomArtist = () => {
						const messages = [
							'Ufo361',
							'Lil Peep',
							'Edo Saiya',
							'KASIMIR1441',
							'Gzuz',
							'Bonez MC',
							'187 Strassenbande',
							'The Weeknd',
							'Juice WRLD',
							'Freakso',
							'Selphius',
							'KD/A',
							'TWICE',
							'NF',
							'Alligatoah',
							'GReeeN',
							'Rass Limit',
							'Machine Gun Kelly',
							'Our Last Night',
						];
						const randomArtist = messages[Math.floor(Math.random() * messages.length)];
						client.user.setActivity(randomArtist, { type : 'LISTENING' });
						setTimeout(setRandomArtist, 1000);
					};
					setRandomArtist();
				}
			}
		}

	});
};