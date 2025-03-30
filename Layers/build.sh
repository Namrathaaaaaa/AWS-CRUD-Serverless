echo "Creating zip for layer"
zip -r layer.zip nodejs

echo "Creating zip for GET Function"
zip -r get.zip ./LambdaFunctionsWithLayer/get/*

echo "Creating zip for POST Function"
zip -r post.zip ./LambdaFunctionsWithLayer/post/*

echo "Creating zip for UPDATE Function"
zip -r update.zip ./LambdaFunctionsWithLayer/update/*

echo "Creating zip for DELETE Function"
zip -r delete.zip ./LambdaFunctionsWithLayer/delete/*
echo "Success!"