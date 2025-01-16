import { ImageResponse } from 'next/og'

export async function GET(request: Request) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            fontFamily: 'poppins',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            backgroundImage:
              'linear-gradient(115deg, #fff1be 28%, #ee87cb 70%, #b060ff)',
          }}
        >
          <div tw="flex items-center justify-center">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                alt="Vercel"
                height={200}
                src="https://domainly.shop/domainly/domainly-logo.png"
                style={{ margin: '0 30px' }}
                width={200}
              />
              <div
                style={{
                  color: '#000000',
                  fontSize: 88,
                  fontWeight: 500,
                  letterSpacing: '-0.025em',
                  lineHeight: 1.4,
                }}
              >
                Domainly
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: 80,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
              color: '#000000',
            }}
          >
            domainly.shop
          </div>
          <div
            style={{
              fontSize: 60,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              whiteSpace: 'pre-wrap',
              color: '#2C3E50',
            }}
          >
            Sell your domain.
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
