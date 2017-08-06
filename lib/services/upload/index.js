import RNFetchBlob from 'react-native-fetch-blob';

export const sendFile = async (fileName, url) => {
	try {
		const filePath = RNFetchBlob.fs.dirs.DocumentDir + '/voice-search.aac';
		const response = await RNFetchBlob.fetch('POST', url, {'Content-Type': 'multipart/form-data'},
			[{
				data: RNFetchBlob.wrap(filePath),
				name: 'voice',
				filename: 'voice.aac'
			}]
		);
		const responseParsed = await response.json();

		return {response: responseParsed}
	} catch (error) {
		return {error}
	}
};
