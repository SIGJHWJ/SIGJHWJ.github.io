// pages/auth.tsx
export const getServerSideProps: GetServerSideProps<AuthNicePageProps> = async (props) => {
	const authQuery = {
		userId,
		returnurl: `http://sigjhwj-github-io.vercel.app/auth/complete`
	}
    
    // api: 요청
	const auth = (await UserService.getAuthNiceData(authQuery)).body ?? {};

	return {
		props: {
			auth
		}
	};
};

const AuthNicePage = ({ auth }: AuthNicePageProps) => {
	useEffect(() => {
		const myForm = document.getElementById('myForm') as HTMLFormElement;

		if (myForm) {
			myForm.submit();
		}
	}, []);

	return (
		<div>
			<form id="myForm" action="https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb">
				<input type="hidden" id="m" name="m" value="service" />
				<input type="hidden" id="token_version_id" name="token_version_id" value={auth.tokenVersionId} />
				<input type="hidden" id="enc_data" name="enc_data" value={auth.encData} />
				<input type="hidden" id="integrity_value" name="integrity_value" value={auth.integrityValue} />
			</form>
		</div>
	);
};

export default AuthNicePage;
