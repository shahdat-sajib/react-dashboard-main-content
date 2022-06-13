import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        {/* <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography> */}

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Employee" total={714} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="New Employee" total={13} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Orders" total={1723} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Delivered" total={745} color="error" icon={'ant-design:bug-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Total Orders"
              subheader="(+13%) than last year"
              chartLabels={[
                '01/01/2022',
                '02/02/2022',
                '03/03/2022',
                '04/04/2022',
                '05/05/2022',
                '06/06/2022',
                '07/07/2022',
                '08/08/2022',
                '09/09/2022',
                '10/10/2022',
                '11/11/2022',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Today's Order"
              chartData={[
                { label: 'Dhaka', value: 4344 },
                { label: 'Chittagong', value: 5435 },
                { label: 'Jessore', value: 1443 },
                { label: 'Rajshahi', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Ordered Products"
              // subheader="(+43%) than last year"
              chartData={[
                { label: 'Mango bar', value: 400 },
                { label: 'Rivera', value: 430 },
                { label: 'Spa', value: 448 },
                { label: 'Clearly lemon', value: 470 },
                { label: 'Yogut', value: 540 },
                { label: 'Twing', value: 580 },
                { label: 'Milk vita', value: 690 },
                { label: 'Clemon', value: 1100 },
                { label: 'Mojo', value: 1200 },
                { label: 'Frutika', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Production"
              chartLabels={['Frutika', 'Mojo', 'Clemon', 'Juice', ]}
              chartData={[
                { name: 'Test 1', data: [80, 50, 30, 40, ] },
                { name: 'Test 2', data: [20, 30, 40, 80, ] },
                { name: 'Test 3', data: [44, 76, 78, 13, ] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '2022, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from March',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Test Sectio"
              list={[
                // {
                //   name: 'FaceBook',
                //   value: 323234,
                //   icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} height={32} />,
                // },
                // {
                //   name: 'Google',
                //   value: 341212,
                //   icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} height={32} />,
                // },
                // {
                //   name: 'Linkedin',
                //   value: 411213,
                //   icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} height={32} />,
                // },
                // {
                //   name: 'Twitter',
                //   value: 443232,
                //   icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} height={32} />,
                // },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
