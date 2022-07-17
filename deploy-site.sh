S3_LOCATION="$1"
DISTRIBUTION_ID="$2"
echo "S3_LOCATION: $S3_LOCATION"
echo "DISTRIBUTION_ID: $DISTRIBUTION_ID"

if [ -z "$S3_LOCATION" ]
then
	echo "S3_LOCATION environment variable is mandatory!"
	exit
fi
if [ -z "$DISTRIBUTION_ID" ]
then
        echo "DISTRIBUTION_ID environment variable is mandatory!"
        exit
fi

rm -rf dist
npm run generate

if [ -d "dist" ]; then
	cd dist

	## build update
	aws s3 sync . $S3_LOCATION --acl public-read --delete --exclude "Docs/*"
	aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

	#########

	echo "Build copied to S3 bucket: $S3_LOCATION"
	echo "Cloudfront cache invalidated: $DISTRIBUTION_ID"
	cd ..
else
	echo "No dist directory found!!!"
fi
