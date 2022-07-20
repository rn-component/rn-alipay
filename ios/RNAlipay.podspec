require "json"

package = JSON.parse(File.read(File.join(__dir__, '..', "package.json")))

Pod::Spec.new do |s|

s.name                = "RNAlipay"
s.version             = package["version"]
s.summary             = package["description"]
s.homepage            = package["repository"]
s.license             = package["license"]
s.author              = { package["author"] => "gavin199502@gmail.com" }
s.social_media_url    = "https://github.com/gavin1995"
s.platform            = :ios, "10.0"
s.source              = { :git => "https://github.com/rn-component/rn-alipay.git", :tag => s.version }
s.source_files        = "**/*.{h,m,swift}"
s.requires_arc        = true

s.dependency          "React"
s.dependency          "AlipaySDK-iOS", "~> 15.8"

end